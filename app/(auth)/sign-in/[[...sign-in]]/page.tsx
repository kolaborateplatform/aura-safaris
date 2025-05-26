import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <SignIn 
        afterSignInUrl="/admin"
        redirectUrl="/admin"
        appearance={{
          elements: {
            footerActionLink: {
              display: 'none'
            },
            formButtonPrimary: {
              backgroundColor: '#000',
              '&:hover': {
                backgroundColor: '#333'
              }
            }
          }
        }}
        path="/sign-in"
      />
    </div>
  );
} 