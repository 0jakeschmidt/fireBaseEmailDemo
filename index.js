const express = require('express');
const app = express();


app.listen(3000, () => console.log(`listening 3000`));
app.use(express.static('blog'));

app.post('api',(request, response) => {
    console.log(request);
});
