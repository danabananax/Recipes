const validateAuthInputs = (email, password, confPassword = null) => {
  if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) throw new Error('email');
  if (!password) throw new Error('password');
  if (confPassword && password !== confPassword) throw new Error('password');
};

export const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
    },
  },
};

export const capitalize = (string) => (string[0].toUpperCase() + string.slice(1).toLowerCase());

export default validateAuthInputs;
