import { createContext, useCallback, useContext, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { api } from '../services/api';

export type ValidateDocumentDTO = {
  codigoUso: string;
  dataNascimento: string;
};

export type ValidateDocumentResponse = {
  status: string;
  mensagem: string;
  nome: string;
  nomeSocial: string | null;
  instituicao: string;
  curso: string;
  tipoDocumento: string;
  documento: string;
  entidade: string;
  foto: string;
  certificado: string;
};

export type Document = {
  docParams: ValidateDocumentResponse;
  reqParams: ValidateDocumentDTO;
};

enum StorageKeys {
  DOCUMENTS = '@dne-digital:documents',
}

type DocumentContextData = {
  documents: Document[];
  validate(data: ValidateDocumentDTO): Promise<ValidateDocumentResponse>;
  save(data: Document): Promise<void>;
  load(): Promise<void>;
  remove(code: string): Promise<void>;
};

const DocumentContext = createContext<DocumentContextData>(
  {} as DocumentContextData,
);

const DocumentProvider: React.FC = ({ children }) => {
  const [documents, setDocuments] = useState<Document[]>([]);

  const validate = useCallback(
    async ({
      codigoUso,
      dataNascimento,
    }: ValidateDocumentDTO): Promise<ValidateDocumentResponse> => {
      const now = new Date();

      const currentYear = now.getFullYear();
      const currentMonth = String(now.getMonth() + 1).padStart(2, '0');
      const currentDay = String(now.getDate()).padStart(2, '0');

      const eventDate = `${currentYear}${currentMonth}${currentDay}`;
      const eventName = 'meiaentrada';

      const params = {
        codigoUso,
        dataNascimento,
        dataEvento: eventDate,
        nomeEvento: eventName,
      };

      const { data } = await api.post<ValidateDocumentResponse>(
        'valida-codigouso',
        params,
      );

      return data;
    },
    [],
  );

  const save = useCallback(async (data: Document) => {
    try {
      let docs: Document[] = [];

      const storageDocs = await AsyncStorage.getItem(StorageKeys.DOCUMENTS);

      if (storageDocs) {
        docs = JSON.parse(storageDocs);
      }

      const documentExists = docs.find(
        doc => doc.reqParams.codigoUso === data.reqParams.codigoUso,
      );

      if (documentExists) {
        throw new Error('Este documento já foi adicionado!');
      }

      docs.push(data);

      await AsyncStorage.setItem(StorageKeys.DOCUMENTS, JSON.stringify(docs));

      setDocuments(docs);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      throw new Error(error.message);
    }
  }, []);

  const load = useCallback(async () => {
    try {
      const docs = await AsyncStorage.getItem(StorageKeys.DOCUMENTS);

      if (!docs) {
        return;
      }

      const parsedDocs = JSON.parse(docs);

      setDocuments(parsedDocs);
    } catch (error) {
      throw new Error('Algo deu errado ao carregar seus documentos!');
    }
  }, []);

  const remove = useCallback(async (code: string) => {
    try {
      const docs = await AsyncStorage.getItem(StorageKeys.DOCUMENTS);

      if (!docs) {
        return;
      }

      const parsedDocs: Document[] = JSON.parse(docs);

      const newDocs = parsedDocs.filter(
        doc => doc.reqParams.codigoUso !== code,
      );

      await AsyncStorage.setItem(
        StorageKeys.DOCUMENTS,
        JSON.stringify(newDocs),
      );

      setDocuments(newDocs);
    } catch (error) {
      throw new Error('Algo deu errado ao excluir seu documento!');
    }
  }, []);

  return (
    <DocumentContext.Provider
      value={{ documents, validate, save, load, remove }}
    >
      {children}
    </DocumentContext.Provider>
  );
};

function useDocument(): DocumentContextData {
  const context = useContext(DocumentContext);

  if (!context) {
    throw new Error('useDocument must be used within an DocumentProvider');
  }

  return context;
}

export { DocumentProvider, useDocument };
