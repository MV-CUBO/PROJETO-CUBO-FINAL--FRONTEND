export const dataPatient = [
  {
    routeLink: 'patient',
    icon: 'fal fa-clipboard',
    label: 'Prontuario'
  }
];

export const navbarDataAdmin = [
  {
    routeLink: 'dashboard',
    icon: 'fal fa-home',
    label: 'Dashboard',
  },
  {
    routeLink: 'paciente',
    icon: 'fal fa-user',
    label: 'Paciente'
  },
  //crud de paciente
  {
    routeLink: '',
    icon: 'fal fa-user-md',
    label: 'Profissional'
  },
  //crud de profissional
  {
    routeLink: 'paciente',
    icon: 'fal fa-history',
    label: 'Log'
  },
  {
    routeLink: 'paciente',
    icon: 'fal fa-power-off',
    label: 'LogOut'
  },

];

export const navbarDataDoctor = [
  {
    routeLink: 'dashboard',
    icon: 'fal fa-home',
    label: 'Dashboard',
  },
  //medico ver as coisas dele
  {
    routeLink: 'paciente',
    icon: 'fal fa-user',
    label: 'Paciente'

  },
  //Lista paciente dele, listar todos na hora de criar o pep
  {
    routeLink: 'paciente',
    icon: 'fal fa-history',
    label: 'Log'
  },
  {
    routeLink: 'paciente',
    icon: 'fal fa-clipboard',
    label: 'Prontuario'
  },
  //cru pep,
  {
    routeLink: 'paciente',
    icon: 'fal fa-power-off',
    label: 'LogOut'
  },

];