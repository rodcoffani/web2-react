function Container(props) {
    return (
        <div className="relative h-full w-full flex flex-wrap justify-between my-0 mx-auto top-[10%]">
          {props.children}
        </div>
      )
}

export default Container