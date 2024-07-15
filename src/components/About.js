function About ()
{
    const AbSection=
    {
            padding: "50px 20px",
            maxWidth: "800px",
            margin: "50px auto",
            boxShadow:" 0 0 10px rgba(0, 0, 0, 0.1)",
            textAlign: "center"
    }
    return(
        <>
        <div class="about-section" style={AbSection}>
    <h1>About Me</h1>
    <p>Hi, I'm Sikha Venkateswararao , a web developer with a passion for creating clean, efficient, and user-friendly websites. I specialize in front-end development and have a knack for turning complex problems into simple, beautiful solutions. Let's work together to bring your ideas to life!</p>
</div>
        </>
     )
}

export default About;