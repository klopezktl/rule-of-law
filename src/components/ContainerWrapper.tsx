type ContainerProps = {
  children: React.ReactNode;
};

export default function ContainerWrapper({ children }: ContainerProps) {
  return (
    <div className="mx-auto mt-24 flex min-h-screen max-w-7xl flex-col border-2 border-black">
      {children}
    </div>
  );
}
