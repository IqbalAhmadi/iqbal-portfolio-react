import portrait form '../assets/images/Iqbal.jpeg';

const About = () => {
    const styles = {
        title: {
            display: 'flex',
            justifyContent: 'space-between',
        },
        portraitImg: {
            float: 'left',
            marginRight: '10px',
        },
    }

    return (
        <section className="bg-gray p-5" id="about">
            <section style={styles.title}>
                <h1>About Me</h1>
            </section>
            <section>
                <img src={portrait} alt="self portrait" style={styles.portraitImg} />
                <h3>Intro</h3>
                <p>
                    I am a full stack web developer with a background in project management. I have a passion for learning and problem solving. I am a team player and I enjoy working with others to achieve a common goal. I am a quick learner and I am always looking for ways to improve my skills.
                </p>
            </section>
        
        </section>
    )
}