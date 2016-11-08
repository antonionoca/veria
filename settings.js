var settings = {
    site: {
        URL: process.env.VERIAURL,  //Complete URL to root. No trailing slash.
        name: process.env.VERIANAME,	//Name of Site
        tagline: process.env.VERIATAGNOTES //Tagline used in title and site description
    },
    database: {
        client: 'sqlite3',
        connection: {
            filename : './config/veria.db'
        }
    },
	plugins: {
		disqus: {
			enabled: false,
			shortname: ''
		}
	},
    theme: {
        name: 'default',
        index: {
            sidebar: {
                avatarURL: process.env.VERIAAVATARURL,
                name: process.env.VERIANAME,
                tagline: process.env.VERIASIDEBARTAGLINE,
                socialLinks:  [
                    {
                        name: 'Twitter',
                        icon: process.env.VERIATWITTERICON,
                        URL: process.env.VERIATWITTERURL
                    },
                    {
						name: 'LinkedIn',
						icon: process.env.VERIALINKEDINICON,
						URL: process.env.VERIALINKEDINURL
                    }]
            }
        }
    }
}

module.exports = settings;  
