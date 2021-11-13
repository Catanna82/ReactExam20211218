const AboutRow = (props) => {
    return (
        <>
            <h4><i className={props.className}></i>{props.title}</h4>
            <p>{props.description}</p>
        </>
    );
}

export default AboutRow;