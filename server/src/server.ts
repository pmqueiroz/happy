import express from 'express';

import './database/connection';

const app = express();
const port = 3333;


app.listen(port, () => {
	console.log(`🚀\xa0 Running on port\xa0${port}`);
});