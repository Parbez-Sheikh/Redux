import { useSelector } from 'react-redux'
const About = () => {
    const count = useSelector((state)=>state.counter.value)
    return (
        <div>
            <h2>This is about page</h2>
            <h1>{count}</h1>
        </div>
    );
};

export default About;