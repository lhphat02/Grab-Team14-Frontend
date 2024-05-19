const ProfilePageLayout = ({ children, className }) => {
  return (
    <div
      className={`flex min-h-screen items-center gap-8 pt-16 md:pt-24 pb-8 bg-gray-100 container-page ${className}`}
    >
      {children}
    </div>
  );
};

export default ProfilePageLayout;
