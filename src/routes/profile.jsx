import CoverLetterImport from '../components/features/profile/CoverLetterImport';
import CVImport from '../components/features/profile/CVImport';
import ProfilePageLayout from '../components/layouts/ProfilePageLayout';

const ProfilePage = () => {
  return (
    <ProfilePageLayout>
      <div className="flex flex-col w-full h-full gap-8">
        <div className="w-full">
          <CVImport />
        </div>
        <div className="w-full">
          <CoverLetterImport />
        </div>
      </div>
    </ProfilePageLayout>
  );
};

export default ProfilePage;
