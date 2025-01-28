// import styles from './Card.module.css';

const Card = (props) => {
  return (
    <div
      className="max-w-md border border-gray-200 rounded-xl 
    shadow-sm dark:bg-gray-600 dark:border-gray-700 mx-auto drop-shadow-xl
    dark:drop-shadow-[0_5px_20px_rgba(255,255,210,0.25)] hover:border-primary
    hover:border-2 dark:hover:border-white bg-primaryLight/30"
    >
      {props.children}
    </div>
  );
};

export default Card;
