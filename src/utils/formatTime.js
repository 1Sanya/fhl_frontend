import moment from 'moment';
import 'moment/locale/ru';

export default (date) => {
  moment.locale('ru');
  return moment(date).format('LL');
};
