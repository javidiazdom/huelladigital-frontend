type typeRoute = {
  home: string;
  email: { confirmation: string; resendConfirmation: string };
  loginRegister: string;
  API: {
    volunteers: { register: string; login: string };
    email: { resendConfirmation: string };
  };
  organizations: {
    register: string;
  };
  convocatories: {
    details: string;
    register: string;
    fetchConvocatory: string;
    joinConvocatory: (id: string) => string;
    registerAsReviser: string;
    fetchListOfConvocatories: (page: number, pagesize: number) => string;
    list: string;
  };
};

const V1 = 'v1';
const ENDPOINT_PROPOSALS = `/api/${V1}/proposals`;
const ENDPOINT_VOLUNTEERS = `/api/${V1}/volunteers`;
const ENDPOINT_EMAILCONFIRMATION = `/api/${V1}/email-confirmation`;

export const ROUTE: typeRoute = {
  convocatories: {
    details: '/convocatory-details',
    list: '/convocatories-list',
    register: `${ENDPOINT_PROPOSALS}`,
    fetchConvocatory: `${ENDPOINT_PROPOSALS}/`,
    joinConvocatory: (id:string) => (`${ENDPOINT_PROPOSALS}/${id}/join`),
    registerAsReviser: `${ENDPOINT_PROPOSALS}/reviser`,
    fetchListOfConvocatories: (page:number, pagesize:number) => (`${ENDPOINT_PROPOSALS}/${page}/${pagesize}`),
  },
  organizations: {
    register: '/organization-register',
  },
  home: '/',
  email: {
    confirmation: '/email-confirmation-register',
    resendConfirmation: '/resend-email-confirmation',
  },
  loginRegister: '/login-register',
  API: {
    volunteers: {
      register: `${ENDPOINT_VOLUNTEERS}/register`,
      login: `${ENDPOINT_VOLUNTEERS}/login`,
    },
    email: {
      resendConfirmation: `${ENDPOINT_EMAILCONFIRMATION}/resend-email-confirmation`,
    },
  },
};
