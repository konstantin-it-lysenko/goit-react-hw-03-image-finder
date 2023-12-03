import { Oval } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Oval
      height={88}
      width={88}
      color="#3b3b3b"
      wrapperStyle={{
        width: '80px',
        margin: 'auto',
      }}
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#c0c0c0"
      strokeWidth={4}
      strokeWidthSecondary={3}
    />
  );
};

export default Loader;
