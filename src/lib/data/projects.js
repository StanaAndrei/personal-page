export const projects = [
    {
        slug: 'touch-me',
        title: 'ToucheMe',
        description: 'A sound/color memory game with Arduino ',
        projectUrl: 'https://wokwi.com/projects/366252063545046017',
        details: 'I implemented a clone of the Touch Me game by Atari using an Arduino Mega',
        tags: ['C++', 'Arduino', 'Electronics', 'OOP']
    },
    {
        slug: 'sens-bus',
        title: 'Sensing bus',
        description: 'An event bus(from scratch) to propagate sensor events',
        projectUrl: 'https://gitlab.com/StanaAndrei/portfolio',
        details: 'An event based bus using observer pattern similar to guava from Java. Written in cpp from scratch.' +
            ' Used to emulate a network composed of different sensors(temperature, humidity...) and different display types.' +
            ' Pretty easy to extend!',
        tags: ['STL', 'C++', 'OOP', 'Event-based', 'Design Patterns']
    },
    {//
        slug: 'lg',
        title: 'Local goods',
        description: 'A simple local romanian store for various goods.',
        projectUrl: 'https://github.com/StanaAndrei/local_goods',
        details: 'I got inspiration from iTEC 2k19 challenge.' +
            ' Here the users(buyers/sellers) can register can affiliate with a company or be independent.' +
            ' They can post products (divided by categories) and buyers can buy them.' +
            ' The money can be deposited/withdrawn via revolut api.',
        tags: ['PHP', 'blade', 'livewire/volt', 'ssr', 'Eloquent']
    },
    {
        slug: 'fileto',
        title: 'Fileto',
        description: 'A file utility app to compress and encode files.',
        projectUrl: 'https://github.com/StanaAndrei/fileto',
        details: 'A simple CLI file utility that enables you to encrypt ' +
            '(either with an inline key using Vigenere cipher or a matricial one using Beaufort cipher) ' +
            'or compress files using huffman codes to reduce the entropy and optimal binary trees.',
        tags: ['Haskell', 'Cabal', 'FP', 'Cryptography', 'DSA', 'Serialization']
    },
    {
        slug: 'eob',
        title: 'Eob',
        description: 'Employee onboarding buddy platform',
        projectUrl: 'https://github.com/StanaAndrei/eob',
        details: 'This is an enterprise app that aims to help new employees to integrate and collaborate\n' +
            'better inside a company.',
        tags: ['NestJS', 'TS', 'React', 'type-orm', 'MySql', 'RestAPIs', 'OOP']
    },
    {
        slug: 'dshf',
        title: 'Hashes & signatures demo',
        projectUrl: 'https://github.com/StanaAndrei/ssc_proj',
        description: `A simple demo for digital signatures and hash functions.`,
        details: 'A simple demo of SHA256 hash and HMAC made for edu purpose.' +
            ' It proves: the speed of file comparisons using hash values, sha256 sensitivity to change ' +
            'using steganography, the infinitesimally small chance of hash collisions and ' +
            'secure communications using hmac signature.',
        tags: ['Rust', 'Cargo', 'Security', 'Nr. theory', 'Hashing', 'Steganography']
    },
    {
        slug: 'gol',
        title: 'Gol',
        projectUrl: 'https://gitlab.com/StanaAndrei/omp_ex/-/tree/main/conways_gol?ref_type=heads',
        description: `A clone of Conway's game of life cellular automaton using c and OpenMP`,
        details: 'A game of life clone where the evolution of the cells is parallelized using OpenMP. ' +
            'You can either define a custom initial config or start with the default one.',
        tags: ['C', 'Parallel Computing', 'OpenMP']
    },
    {
        slug: 'dspapp',
        title: 'DSP-App',
        description: 'A simple wav file signal processor',
        projectUrl: 'https://github.com/StanaAndrei/dspapp',
        details: '\n' +
            'A CLI linux app that makes it easy to apply various audio effects(e.g. reverb, echo) or convert a WAV file to morse code. ' +
            'I used matlab for plotting and prototyping.',
        tags: ['C', 'Makefile', 'Linux', 'Digital Signal Processing', 'Matlab', 'OOP']
    },
    {
        slug: 'fb',
        title: 'Flappy-bird',
        description: 'A flappy-bird clone using pygame\n',
        projectUrl: 'https://gitlab.com/StanaAndrei/fb',
        details: 'A flappy-bird clone using pygame\n',
        tags: ['Python', 'Pygame', '2D graphics'],
    },
    {
        slug: 'vcs',
        title: 'VCS',
        description: 'A lite version control system(like git)',
        projectUrl: 'https://github.com/StanaAndrei/vcsSO',
        details: 'A lite vcs similar to git to track changes and find threats in a target folder. ' +
            'Built for linux in c and bash. Used just system functions.',
        tags: ['C', 'bash', 'Linux']
    },
    {
        slug: 'tangled1',
        title: 'Tangled One',
        description: 'A pve/pvp web maze game',
        projectUrl: 'https://github.com/StanaAndrei/eye-maze-v2.0',
        details: 'This is a pvp game where you should escape from a maze and collect coins by controlling your character with eyes. ' +
            'The players who has the most coins gained wins.\n' +
            'The game has features like lobbies, custom maps, match stats, matchmaking queues and more.\n' +
            ' I’ve also created a single player version in which your enemies are monsters, ' +
            'the time that you need to finish the maze is measured and the coins decrease that time.\n',
        tags: ['Spring', 'thymeleaf', 'jquery', 'stomp sockets', 'p5js', 'eye-gazer', 'PgSql', 'OOP']
    },
    {
        slug: 'rapstaos',
        title: 'Rapsta OS',
        description: 'A basic multi threaded os kernel from scratch',
        projectUrl: 'https://gitlab.com/StanaAndrei/rapsta_os',
        details: 'A simple multithreaded unix-like os kernel built with the help of a uni mate from scratch to show applicability of concepts from ' +
            'fundamentals of computer engineering and hardware-software interface.\n',
        tags: ['qemu', 'dos', 'asm', 'c', 'kernel programming', 'comp engineering'],
    },
    {
        slug: 'crowdly',
        title: 'Crowdly',
        description: 'A twitter clone.',
        projectUrl: 'https://github.com/StanaAndrei/crowdly',
        details: 'A social media app where users can create an account, login, activate account via email, \n' +
            'update profile data, create microposts, (un)follow other users, reset password via email.',
        tags: ['RubyOnRails', 'erp', 'SCSS', 'Unit Testing', 'ssr', 'OOP']
    },
    {
        slug: 'pe',
        title: 'Presidential-Election-App\n',
        description: 'A simple voting system.',
        projectUrl: 'https://github.com/StanaAndrei/crowdly',
        details: 'The app aims to help citizens to reduce the necessary effort and amount of resources to vote for the presidents.\n' +
            'The client can candidate to an election and vote other candidates. The president is selected and after one day a new president is elected.\n' +
            'Made to see how spring and mvc work.',
        tags: ['Spring', 'react', 'OOP']
    },
    {
        slug: 'gfw',
        title: 'Classic Games 4 web',
        description: 'A list of some classic games for web',
        projectUrl: 'https://qxnby.csb.app',
        details: 'A list of some classic games for web',
        tags: ['p5js', 'js', 'css', 'html']
    },
    {
        slug: 'ap',
        title: 'Ano Pastebin',
        description: 'An anonymous pastebin clone',
        projectUrl: 'https://github.com/StanaAndrei/ano-pastebin',
        details: 'An anonymous pastebin clone. One of my first projects made to play along with fs web dev',
        tags: ['react', 'spring']
    },
    {
        slug: 'this',
        title: 'This Portfolio',
        description: 'My personal portfolio',
        projectUrl: 'https://github.com/StanaAndrei/personal-page',
        details: 'My personal portfolio. This website you are now on! A good example of recursion =))',
        tags: ['svelte kit', 'devops']
    },
];

export function getProjectBySlug(slug) {
    return projects.find(p => p.slug === slug);
}