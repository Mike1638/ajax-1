getcss.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/style.css');
    request.onload = (() => {
        console.log('成功了');
        console.log(request.response);
        const style = document.createElement('style');
        style.innerHTML = request.response;
        document.head.appendChild(style);
    })
    request.onerror = (() => {
        console.log('失败了');
    })
    request.send();
};

getjs.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/2.js');
    request.onload = (() => {
        console.log('成功了');
        console.log(request.response);
        const js = document.createElement('script');
        js.innerHTML = request.response;
        document.body.appendChild(js);
    })
    request.onerror = (() => {
        console.log('失败了');
    })
    request.send();
};

gethtml.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/3.html')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const div = document.createElement('div');
                div.innerHTML = request.response;
                document.body.appendChild(div);
            } else if (request.status > 400) {
                console.log('加载失败哦');
            }

        }
    }

    request.send();
}

getxml.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/4.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const xml = document.createElement('div')
                xml.innerHTML = request.response
                console.log(request.response);
                console.log(xml);
                // document.body.appendChild(xml)
                const dom = request.responseXML;
                const text = dom.getElementsByTagName('warning')[0].textContent
                console.log(dom);
                console.log(text.trim());
                const xml2 = document.createElement('div');
                xml2.innerHTML = text.trim();
                // document.body.appendChild(xml2)
            } else if (request.status > 400) {
                alert('加载失败')
            }
        }
    }
    request.send();
}

getjson.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", '/5.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const object = JSON.parse(request.response);
            myname.textContent = object.name;
        }
    }
    request.send();
}


let n = 1;

getpage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', `/page${n+1}.json`)
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const array = JSON.parse(request.response)
            const result = array.forEach(item => {
                const li = document.createElement('li')
                li.textContent = item.id
                xxx.appendChild(li)
            });
            n += 1
        }
    }
    request.send()
}