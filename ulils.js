const debounce = (func, delay = 1000) => {
  //pongo 1000 como predeterminado
  let timeoutId;
  return (...args) => {
    //con "...args" permito que se pasen muchos argumentos a la funcion. es como poner (arg1,arg2,arg3,...)
    if (timeoutId) {
      clearInterval(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(null, args); //con "aply(null,args)" le doy a la funcion todos los argumentos que se pasaron antes, pero de la forma "(arg1,arg2,arg3,...)"
    }, delay);
  };
};
