import Form from "@/src/components/ui/Form";

const SigninPage = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-violet-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-violet-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-md px-6">
        <Form signin />
      </div>
    </section>
  );
};

export default SigninPage;