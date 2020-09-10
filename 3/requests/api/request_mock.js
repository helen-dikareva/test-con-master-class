import { RequestMock } from 'testcafe';

//constructor
const mocker = RequestMock();

//onRequestTo
//String, array of string
mocker
    .onRequestTo('https://example.com')
    .respond(/*...*/);

mocker
    .onRequestTo(['https://example.com', 'http://localhost:8080'])
    .respond(/*...*/);

//RegExp
mocker
    .onRequestTo(/\/site\/collection\/(\d+)\/images/)
    .respond(/*...*/);

//Object (by parameters)
mocker
    .onRequestTo({
        url:    'https://testcafe/example/',
        method: 'post',
        isAjax: true
    })
    .respond(/*...*/);

//Function (by predicate)
mocker
    .onRequestTo(request => {
        return request.userAgent === 'Chrome 77.0.3865.120 / macOS 10.15.1' &&
               request.url === 'http://example.com' &&
               request.method === 'post' &&
               request.isAjax &&
               request.headers['content-type'] === 'application/json' &&
               request.body.toString() === 'foo=bar';
    })
    .respond(/*...*/);

//respond
RequestMock()
    .onRequestTo(/*...*/)
    .respond(/*body, statusCode, headers*/);

//JSON
RequestMock()
    .onRequestTo(/*...*/)
    .respond([{ id: 1, item: "first item" }]);

//HTML and 404 statusCode
RequestMock()
    .onRequestTo(/*...*/)
    .respond('<div>Not found</div>', 404);

//empty HTML, 201 status code and custom header
RequestMock()
    .onRequestTo(/*...*/)
    .respond(null, 201, {
        'server': 'nginx/1.10.3'
    });

//binary data
RequestMock()
    .onRequestTo(/*...*/)
    .respond(Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]));

//custom response
RequestMock()
    .onRequestTo(/*...*/)
    .respond((req, res) => {
        res.headers['x-calculated-header'] = 'calculated-value';
        res.statusCode                     = '200';

        const parsedUrl = url.parse(req.path, true);

        res.setBody('calculated body' + parsedUrl.query['param']);
    });


//sever mocked requests
RequestMock()
    .onRequestTo({
        url:    'https://testcafe/example/',
        method: "post",
        isAjax: true
    })
    .respond(null, 201)
    .onRequestTo(/\/site\/collection\/(\d+)\/images/)
    .respond('<div>Not found</div>', 404);
