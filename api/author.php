
<?php


    header("Content-Type:application/json");

    // 热门作者(推荐)
        $recUrl = 'https://moment.douban.com/api/auth_authors/rec?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&count=20&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&start=0&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6';

        // 热门作者(全部)
        $allUrl = 'https://moment.douban.com/api/auth_authors/all?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&count=20&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&start=0&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6';


        $recResult = file_get_contents($recUrl);

        $allResult = file_get_contents($allUrl);

        // echo $recResult; // {}

        // echo $allResult; // {}

        // 最终结果  {}{}

        // 先将json数据转成PHP数组
        // 然后再将PHP数组处理成二维数组，再转成 json

        // {} => PHP对象，通过第2个参数true  也能是一个PHP数组
        // [{},{}] => PHP 数组

        //

        $recResult = json_decode($recResult, true);
        $allResult = json_decode($allResult, true);

        $result = array('rec'=>$recResult, 'all'=>$allResult);

        echo json_encode($result);



    //同时返回两个数据时会自己拼接,不再是json数据了
    //所以服务端先将json数据转成PHP数组,然后将PHP数组处理成二维数组,再转成json





?>