export const validatePassword = (password, passCheck) => (
  passCheck.length > 5 && password === passCheck
);

export const largeModalStyles = {
  overlay : {
    backgroundColor   : 'rgba(0, 0, 0, 0.75)'
  },
  content : {
    height                     : 'auto',
    position                   : 'absolute',
    top                        : '15%',
    left                       : '15%',
    right                      : '15%',
    bottom                     : '15%',
    border                     : '1px solid #ccc',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px'
  }
};
export const smallModalStyles = {
  overlay : {
    backgroundColor   : 'rgba(0, 0, 0, 0.75)'
  },
  content : {
    height                     : 'auto',
    position                   : 'absolute',
    top                        : '15%',
    left                       : '15%',
    right                      : '15%',
    bottom                     : 'auto',
    border                     : '1px solid #ccc',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px'
  }
};
