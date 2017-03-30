<?php

    // 使用time()函数可以获取当前服务器的时间（时间戳）

    // echo time();

    // echo '<br />';

    // echo date('Y-m-d H:i:s', time());

    // 
    // echo date('Y-m-d', strtotime('-2month'));
    
    // 可以获取PHP的详细信息，包括目录，所支持的扩展等很多信息
    // phpinfo();

    // header('Content-Type: application/json');

    // $url = 'https://moment.douban.com/api/stream/date/2016-08-20?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&format=full&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6';

    // 使用PHP发起一个请求，这个请求是不会受到浏览器限制的
    // 所以也就没有的所谓的域的限制

    // 通过file_get_contents这个函数，可以读取远程地址的数据
    // 但是默认不支持 https 协议，开启php_openssl扩展后可以支持
    // echo file_get_contents($url);



?>