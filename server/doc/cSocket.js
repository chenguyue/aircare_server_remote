Socket {
  nsp: 
   Namespace {
     name: '/',
     server: 
      Server {
        nsps: [Object],
        _path: '/socket.io',
        _serveClient: true,
        _adapter: [Function: Adapter],
        _origins: '*:*',
        sockets: [Circular],
        eio: [Object],
        httpServer: [Object],
        engine: [Object] },
     sockets: { '/#OkcpArSTSqnekA2bAAAA': [Circular] },
     connected: { '/#OkcpArSTSqnekA2bAAAA': [Circular] },
     fns: [],
     ids: 0,
     adapter: 
      Adapter {
        nsp: [Circular],
        rooms: [Object],
        sids: [Object],
        encoder: Encoder {} },
     _events: { connection: [Function] },
     _eventsCount: 1 },
  server: 
   Server {
     nsps: { '/': [Object], '/access': [Object] },
     _path: '/socket.io',
     _serveClient: true,
     _adapter: [Function: Adapter],
     _origins: '*:*',
     sockets: 
      Namespace {
        name: '/',
        server: [Circular],
        sockets: [Object],
        connected: [Object],
        fns: [],
        ids: 0,
        adapter: [Object],
        _events: [Object],
        _eventsCount: 1 },
     eio: 
      Server {
        clients: [Object],
        clientsCount: 1,
        pingTimeout: 60000,
        pingInterval: 25000,
        upgradeTimeout: 10000,
        maxHttpBufferSize: 100000000,
        transports: [Object],
        allowUpgrades: true,
        allowRequest: [Function: bound ],
        cookie: 'io',
        cookiePath: false,
        perMessageDeflate: [Object],
        httpCompression: [Object],
        ws: [Object],
        _events: [Object],
        _eventsCount: 1 },
     httpServer: 
      Server {
        domain: null,
        _events: [Object],
        _eventsCount: 5,
        _maxListeners: undefined,
        _connections: 4,
        _handle: [Object],
        _usingSlaves: false,
        _slaves: [],
        _unref: false,
        allowHalfOpen: true,
        pauseOnConnect: false,
        httpAllowHalfOpen: false,
        timeout: 120000,
        _pendingResponseData: 0,
        _connectionKey: '6::::8887' },
     engine: 
      Server {
        clients: [Object],
        clientsCount: 1,
        pingTimeout: 60000,
        pingInterval: 25000,
        upgradeTimeout: 10000,
        maxHttpBufferSize: 100000000,
        transports: [Object],
        allowUpgrades: true,
        allowRequest: [Function: bound ],
        cookie: 'io',
        cookiePath: false,
        perMessageDeflate: [Object],
        httpCompression: [Object],
        ws: [Object],
        _events: [Object],
        _eventsCount: 1 } },
  adapter: 
   Adapter {
     nsp: 
      Namespace {
        name: '/',
        server: [Object],
        sockets: [Object],
        connected: [Object],
        fns: [],
        ids: 0,
        adapter: [Circular],
        _events: [Object],
        _eventsCount: 1 },
     rooms: { '/#OkcpArSTSqnekA2bAAAA': [Object] },
     sids: { '/#OkcpArSTSqnekA2bAAAA': [Object] },
     encoder: Encoder {} },
  id: '/#OkcpArSTSqnekA2bAAAA',
  client: 
   Client {
     server: 
      Server {
        nsps: [Object],
        _path: '/socket.io',
        _serveClient: true,
        _adapter: [Function: Adapter],
        _origins: '*:*',
        sockets: [Object],
        eio: [Object],
        httpServer: [Object],
        engine: [Object] },
     conn: 
      Socket {
        id: 'OkcpArSTSqnekA2bAAAA',
        server: [Object],
        upgrading: false,
        upgraded: false,
        readyState: 'open',
        writeBuffer: [Object],
        packetsFn: [Object],
        sentCallbackFn: [],
        cleanupFn: [Object],
        request: [Object],
        remoteAddress: '::ffff:10.107.30.200',
        checkIntervalTimer: null,
        upgradeTimeoutTimer: null,
        pingTimeoutTimer: [Object],
        transport: [Object],
        _events: [Object],
        _eventsCount: 3 },
     encoder: Encoder {},
     decoder: Decoder { reconstructor: null, _callbacks: [Object] },
     id: 'OkcpArSTSqnekA2bAAAA',
     request: 
      IncomingMessage {
        _readableState: [Object],
        readable: true,
        domain: null,
        _events: {},
        _eventsCount: 0,
        _maxListeners: undefined,
        socket: [Object],
        connection: [Object],
        httpVersionMajor: 1,
        httpVersionMinor: 1,
        httpVersion: '1.1',
        complete: true,
        headers: [Object],
        rawHeaders: [Object],
        trailers: {},
        rawTrailers: [],
        upgrade: false,
        url: '/socket.io/1/?transport=polling&b64=true',
        method: 'GET',
        statusCode: null,
        statusMessage: null,
        client: [Object],
        _consuming: false,
        _dumped: true,
        _query: [Object],
        res: [Object],
        cleanup: [Function: cleanup] },
     onclose: [Function: bound ],
     ondata: [Function: bound ],
     onerror: [Function: bound ],
     ondecoded: [Function: bound ],
     sockets: { '/#OkcpArSTSqnekA2bAAAA': [Circular] },
     nsps: { '/': [Circular] },
     connectBuffer: [] },
  conn: 
   Socket {
     id: 'OkcpArSTSqnekA2bAAAA',
     server: 
      Server {
        clients: [Object],
        clientsCount: 1,
        pingTimeout: 60000,
        pingInterval: 25000,
        upgradeTimeout: 10000,
        maxHttpBufferSize: 100000000,
        transports: [Object],
        allowUpgrades: true,
        allowRequest: [Function: bound ],
        cookie: 'io',
        cookiePath: false,
        perMessageDeflate: [Object],
        httpCompression: [Object],
        ws: [Object],
        _events: [Object],
        _eventsCount: 1 },
     upgrading: false,
     upgraded: false,
     readyState: 'open',
     writeBuffer: [ [Object] ],
     packetsFn: [ undefined ],
     sentCallbackFn: [],
     cleanupFn: [ [Function], [Function] ],
     request: 
      IncomingMessage {
        _readableState: [Object],
        readable: true,
        domain: null,
        _events: {},
        _eventsCount: 0,
        _maxListeners: undefined,
        socket: [Object],
        connection: [Object],
        httpVersionMajor: 1,
        httpVersionMinor: 1,
        httpVersion: '1.1',
        complete: true,
        headers: [Object],
        rawHeaders: [Object],
        trailers: {},
        rawTrailers: [],
        upgrade: false,
        url: '/socket.io/1/?transport=polling&b64=true',
        method: 'GET',
        statusCode: null,
        statusMessage: null,
        client: [Object],
        _consuming: false,
        _dumped: true,
        _query: [Object],
        res: [Object],
        cleanup: [Function: cleanup] },
     remoteAddress: '::ffff:10.107.30.200',
     checkIntervalTimer: null,
     upgradeTimeoutTimer: null,
     pingTimeoutTimer: 
      Timeout {
        _called: false,
        _idleTimeout: 85000,
        _idlePrev: [Object],
        _idleNext: [Object],
        _idleStart: 3024,
        _onTimeout: [Function],
        _repeat: null },
     transport: 
      XHR {
        readyState: 'open',
        discarded: false,
        closeTimeout: 30000,
        maxHttpBufferSize: 100000000,
        httpCompression: [Object],
        supportsBinary: false,
        _events: [Object],
        _eventsCount: 5,
        sid: 'OkcpArSTSqnekA2bAAAA',
        req: null,
        res: null,
        writable: false },
     _events: 
      { close: [Object],
        data: [Function: bound ],
        error: [Function: bound ] },
     _eventsCount: 3 },
  rooms: {},
  acks: {},
  connected: true,
  disconnected: false,
  handshake: 
   { headers: { host: '10.107.31.156', origin: 'Arduino' },
     time: 'Tue Mar 14 2017 15:09:42 GMT+0800 (CST)',
     address: '::ffff:10.107.30.200',
     xdomain: true,
     secure: false,
     issued: 1489475382117,
     url: '/socket.io/1/?transport=polling&b64=true',
     query: { transport: 'polling', b64: 'true' } } }