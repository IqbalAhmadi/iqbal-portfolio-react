import portrait from '../assets/images/Iqbal.jpeg';

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
  };

  return (
    <section className="bg-gray p-5" id="about">
      <section style={styles.title}>
        <h1>About Me</h1>
      </section>
      <section>
        <img src={portrait} alt="self portrait" style={styles.portraitImg} />
        // <h3>Intro</h3>
        <p>
          Welcome to my online portfolio. My name is Iqbal Ahmadi, and I am a
          passionate professional who has embarked on an incredible journey of
          self-discovery and growth. With a solid foundation as a project
          manager and interpreter/translator for the US Army, I have expanded my
          skill set to include web development. This diverse background has
          shaped me into a versatile individual with a unique perspective and a
          strong drive to excel in the tech industry.
        </p>
        <section style={{ display: 'flex' }}>
          <h3>Background</h3>
        </section>
        <p>
          In 2017, I decided to explore a new career path and enhance my skill
          set by delving into the world of coding. Eager to expand my knowledge,
          I enrolled in college to pursue a diploma in computer science, which
          laid a strong foundation for my future endeavors. During this time, I
          became deeply fascinated by web development and recognized its vast
          potential for innovation and creative expression. <br />
          To further nurture my newfound passion, I actively sought
          opportunities to refine my coding skills. My curiosity led me to
          discover the renowned coding boot camp offered by UC Davis.
          Recognizing the institution reputation for excellence and its
          commitment to empowering aspiring developers, I eagerly joined the
          program. <br />
          The boot camp experience was transformative, as it exposed me to a
          rigorous curriculum designed to equip students with practical,
          industry-relevant skills. I honed my abilities in web development,
          mastering cutting-edge technologies, such as HTML, CSS, JavaScript,
          and frameworks like React. The collaborative learning environment and
          expert guidance provided by the instructors further fueled my
          enthusiasm and accelerated my growth.
        </p>
      </section>
    </section>
  );
};

export default About;
