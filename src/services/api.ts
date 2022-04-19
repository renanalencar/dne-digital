import axios from 'axios';

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

const api = axios.create({
  baseURL: 'https://api.meiaentrada.org.br',
  headers: {
    codigoacesso: '4807689a',
  },
});

export const validateDocument = async ({
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
};
