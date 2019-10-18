import { Injectable } from '@nestjs/common';

interface DatabaseConfig {
    host: string;
    port: number;
    user: string;
    password: string;
    database: string;
}

@Injectable()
export class ConfigService {

    get config(): DatabaseConfig {
        return {
            host: 'localhost',
            port: 5432,
            database: 'cmdbbtbi',
            user: 'cmadbbtbi',
            password: 'cghQZynG0whwtGki-ci2bpxV5Jw_5k6z',
        };
    }
}
