import axios from 'axios'
import Links from './links';

async function deleteItem(id) {
    await axios.delete(Links.deleteRequest + '/' + id);
}

export default deleteItem;