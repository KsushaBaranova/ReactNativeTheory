import {useState} from 'react';

const useEmail = (emailString: string) => {
  const [email, setStateEmail] = useState(emailString);
  const [error, setError] = useState<string | undefined>(undefined);

  const setEmail = (value: string) => {
    setStateEmail(value);

    const regEx =
      /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

    if (value === '' || regEx.test(value)) {
      setError(undefined);
    } else {
      setError('Error! Invalid e-mail');
    }
  };

  return [email, error, setEmail] as const;
};

export default useEmail;
