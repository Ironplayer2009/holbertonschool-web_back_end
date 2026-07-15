import redis from 'file:///usr/share/nodejs/redis/index.js';

const client = redis.createClient();

client.on('connect', () => {
    console.log('Redis client connected to the server');
});

client.on('err', (error) => {
    console.error(err);
});

function createHash(){
    const hashKey = 'HolbertonSchools';
    const schools = {
	Portland: '50',
	Seattle: '80',
	'New York': '20',
	Bogota: '20',
	Cali: '40',
	Paris: '2'
    };
    for(const[field, value] of Object.entries(schools)){
	client.hset(hashKey,field, value, redis.print );
    }
    
}

function displayHash(){
    const hashKey = 'HolbertonSchools';
    client.hgetall(hashKey, (err, object) => {
	if (err){
	    console.error(err);
	}
	console.log(object);
    });
}

createHash();
displayHash();

