interface CardProps {
  title: string;
  value: string | number;
  icon: string;
}

interface user {
  id: string;
  username: string;
  email: string;
  school: string;
  role: string;      
    
}

interface PageProps {
    params: {
      admin: string
    }
}

interface schoolName {
    id?: string;
    name: string;
  address: string;
  created_on?: string; 
    
}

interface Token{
  access: string;
  refresh: string;
}

interface Credentials{
  school: string;
  username: string;
  role: string;
  email: string;
  password: string ;
}