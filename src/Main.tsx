import { animated, useSpring } from '@react-spring/web';

export const Main = () => {
  const [springPropsCell, setSpringPropsCell] = useSpring(() => ({
    from: {
      transform: `scale(1)`,
    },
    to: {
      transform: `scate(1.5)`,
    },
    config: { duration: 2000 },
  }));
  return (
    <animated.div style={{ ...springPropsCell }}>
      <img
        src="https://i.ytimg.com/vi/1Vseih3lgPk/maxresdefault.jpg"
        style={{ width: '300px', position: 'fixed', top: '100px', left: 'calc(50% - 150px)' }}
      />
    </animated.div>
  );
};
