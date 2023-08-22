import Hero from '../components/Hero.component';
import PropTypes from 'prop-types';
import { useDocTitle } from '../hooks/docTitle.hook';

export const HomeScreen = ({ documentTitle }) => {
  const [docTitle, setDocTitle] = useDocTitle(documentTitle);

  return (
    <div>
      <Hero />
    </div>
  );
};

HomeScreen.propTypes = {
  documentTitle: PropTypes.string.isRequired,
};
