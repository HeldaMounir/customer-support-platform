import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type User = {
  id: string;
  name: string;
  email: string;
  role: "customer";
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({
  children,
}: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem(
      "supportly_user"
    );

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    setIsLoading(false);
  }, []);

  const login = async (
    email: string,
    password: string
  ) => {
    if (!email || !password) {
      throw new Error(
        "Email and password are required."
      );
    }


    const mockUser: User = {
      id: "customer-001",
      name: "Helda Mounir",
      email,
      role: "customer",
    };

    localStorage.setItem(
      "supportly_user",
      JSON.stringify(mockUser)
    );

    setUser(mockUser);
  };

  const logout = () => {
    localStorage.removeItem("supportly_user");

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: Boolean(user),
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
}