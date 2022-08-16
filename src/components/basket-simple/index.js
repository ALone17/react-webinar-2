import React from 'react';
import propTypes from 'prop-types';
import plural from "plural-ru";
import { cn as bem } from "@bem-react/classname";
import numberFormat from "../../utils/numberFormat";
import { Link } from 'react-router-dom';
import useSelector from "../../utils/use-selector";
import './styles.css';


function BasketSimple({ sum, amount, onOpen }) {
  const language = useSelector(state => state.multilang.CurrentLang);
  const cn = bem('BasketSimple');
  const [a, b, c] = language.commodityDeclensions
  return (
    <div className={cn()}>
      <span className={cn('label')}>{language.inTheBasket}:</span>
      <span className={cn('total')}>
        {amount
          ? `${amount} ${plural(amount, a, b, c)} / ${numberFormat(sum)} ₽`
          : language.empty
        }
      </span>
      <Link to="/"><button className='BasketSimple__button' onClick={onOpen}>{language.go}</button></Link>
    </div>
  )
}

BasketSimple.propTypes = {
  onOpen: propTypes.func.isRequired,
  sum: propTypes.number,
  amount: propTypes.number
}

BasketSimple.defaultProps = {
  onOpen: () => { },
  sum: 0,
  amount: 0
}

export default React.memo(BasketSimple);