const Parent = (props) => {
  return (
    <>
      <div>
        Hello this is Parent
        and name : {props.name}

        {props.children}
    
      </div>
    </>
  );
};

export { Parent };
