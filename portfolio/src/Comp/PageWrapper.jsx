const PageWrapper = ({ children }) => {
  return (
    <div style={{ 
      marginTop: '3vw',
      width: '100%',
      position: 'relative'
    }}>
      {children}
    </div>
  );
};

export default PageWrapper;
