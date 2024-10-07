export interface User {
    id: number;
    username: string;
    email: string;
    password?: string; // Opcional, dependiendo de si necesitas almacenar contraseñas
  }
  