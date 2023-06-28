import { hash } from 'bcryptjs';
import { v4 as uuidV4 } from 'uuid';

import createConnection from '../index';

async function create() {
    const connection = await createConnection('localhost');
    const id = uuidV4();
    const password = await hash('admin', 0);

    await connection.query(
        `INSERT INTO USERS(id, name, email, password, driver_license, "isAdmin", created_at) values ('${id}', 'admin', 'admin@email.com', '${password}', '1234', true, 'now()')`
    );
}

create().then(() => console.log('Users seed success!'));
