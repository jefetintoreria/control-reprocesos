/* Configuración de la conexión. Solo hay que cambiar estos valores UNA vez (están en Supabase > Project Settings > API). */
window.TENIMOS_CONFIG = {
  url: 'https://rgtxpundwfafupbnwxqs.supabase.co/rest/v1/',          // ejemplo: https://abcdefgh.supabase.co
  key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJndHhwdW5kd2ZhZnVwYm53eHFzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMyODEzNTYsImV4cCI6MjEwODg1NzM1Nn0.uZy7pAKmmg3Ad8L7breQePzXWR_coFOYjC0JPLgRX1Y',          // la que dice "anon public" (NO la service_role)
  // Correos con permisos de administrador (pueden ver Maestros restringidos y borrar):
  admins: ['jefetintoreria@tenimos.com.co'],
  // Nombre que se muestra para cada correo:
  nombres: {
    'andres@tenimos.com': 'Andrés Pérez',
    'alex@tenimos.com': 'Alex Fonnegra',
    'eliana@tenimos.com': 'Eliana Castaño'
  }
};
