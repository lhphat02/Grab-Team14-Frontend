import { useState } from 'react';
import AuthFormLayout from '../../layouts/AuthFormLayout';
import BaseInput from '../../common/BaseInput';
import BaseButton from '../../common/BaseButton';

const ChangePasswordForm = () => {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { currentPassword, newPassword, confirmNewPassword } = formData;

    if (!currentPassword || !newPassword || !confirmNewPassword) {
      setError('Please fill in all required fields.');
      return;
    }

    if (newPassword !== confirmNewPassword) {
      setError('New password and confirm new password do not match.');
      return;
    }

    window.location.reload();
  };
  return (
    <AuthFormLayout
      showLogo={false}
      title="Change Password"
      onFormSubmit={handleSubmit}
      formDetails={
        <>
          <BaseInput
            label="Current Password"
            type="password"
            name="currentPassword"
            placeholder="Current Password"
            onChange={handleChange}
            required
          />
          <BaseInput
            label="New Password"
            type="password"
            name="newPassword"
            placeholder="New Password"
            onChange={handleChange}
            required
          />
          <BaseInput
            label="Confirm New Password"
            type="password"
            name="confirmNewPassword"
            placeholder="Confirm New Password"
            onChange={handleChange}
            required
          />

          {error ? <p className="text-center text-red-500">{error}</p> : null}

          <BaseButton>Confirm</BaseButton>
        </>
      }
    />
  );
};

export default ChangePasswordForm;
