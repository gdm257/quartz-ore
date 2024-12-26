---
aliases:
  - Perl
  - Perl Specification
tags:
  - flag/MachineLanguage/Programming
  - Label/Industry-工业科学/IT/Language
---

[Perl入门秘籍](https://perl-book.junmajinlong.com/)

[Perl系列文章 | 骏马金龙](https://www.junmajinlong.com/perl/index/)

[Perl 教程 | 他山教程，只选择最优质的自学材料](http://www.tastones.com/tutorial/perl/)


## Compile

Perl

- Info:
    * Standard: Perl 5
    * Run: src -(Interpreter)-> Execute
    * REPL: 
    * Dependency Manager: cpan
    * IDE: JetBrains
    * Formatter: JetBrains
    * Checker: JetBrains
    * Tag: Write Only, Script
    * Windows Environment: 
    * Linux Environment: 
    * Main: perl xxx.pl



## Namespace


```perl
CPAN

// 查看已安装
perldoc -q installed
perldoc perllocal
perldoc <module name>  #验证是否安装
cpan -l
cpan -a

ExtUtils::Installed 方法查看已安装：
#!/usr/bin/perl
use strict;
use ExtUtils::Installed;

my $inst = ExtUtils::Installed->new();

my @modules = $inst->modules();

foreach  (@modules) {
        my  $ver = $inst->version($_) || "???";
        printf("%-22s -Version- %-22s\n", $_, $ver);
}
exit;





// cpan 交互式（不推荐，请用 App::cpanminus）
# 进入cpan的交互式shell
# 在这个交互式模式下，可以执行很多操作。例如安装模块、下载模块、按照正则查找模块、查找某个作者的模块、升级模块、列出最近上传到CPAN的模块等等。
perl -MCPAN -e "shell"

cpan >h  #帮助
cpan >m /^File::Util*/  #按正则表达式查找包含File::Util字符的模块
>i /^File::Util*/  #按正则表达式查找包含File::Util字符的模块/
>install App::cpanminus

当我们第一次进入CPAN shell的时候，会让我们配置CPAN，我们可以选择让它自动配置。自动配置后，它会提示配置文件保存到了哪里。

我们也可以在cpan交互式中使用mkmyconfig重新生成属于当前用户的配置文件，它会保存到~/.cpan/CPAN/MyConfig.pm，同时还会将local::lib的一些相关环境变量追加到~/.bashrc中。  /

进入cpan交互式shell，键入o conf即可输出当前的配置。内容项很多

使用cpan时，还建议更新和安装以下几个模块：
> install CPAN ExtUtils::MakeMaker Module::Build Bundle::CPAN
安装这几个模块可以解决很多不必要的麻烦。



// cpan 命令（不推荐，请用 App::cpanminus）
# cpan命令是随perl一起安装的一个perl脚本，它让我们从cpan那恶心的交互式中解脱出来。但它内部实现的功能主要还是调用CPAN.pm，和cpan交互式是一样的。

cpan -i File::Util::Manual  #安装指定模块
cpan -i App::cpanminus
cpan -D File::Utils  #查看模块信息
cpan -J  #对于了解和修改CPAN模块配置文件非常有帮助，可以执行一下试试看。




//cpanm (App::cpanminus)
# 这个是真正的完全一键安装，无需任何配置。而且，它没有交互式模式。
# 安装 cpanm 的几种方式
perl -MCPAN -e "shell"
cpan> install App::cpanminus

cpan -i App::cpanminus


# 使用
cpanm -h
cpanm File::Utils  #安装模块
--info
--mirrors http://mirrors.aliyun.com/CPAN
--test-only
--sudo
--reinstall
--local-lib

cpanm [options] Module [...]



// pmuninstall
要卸载一个模块，可以安装pmuninstall模块，它提供pm-uninstall命令，可以快速卸载模块。
cpan App::pmuninstall
pm-uninstall MongoDB  #卸载模块，默认会给出提示，是否要确认卸载
pm-uninstall -f MongoDB  #强制卸载


// local::lib
cpan[9]> install local::lib
# 默认情况下，安装的第三方模块都会和perl放在一起，而且对于那些非root用户，对某些目录没有写入权限，导致安装失败，只能sudo。可以使用local::lib，自定义安装路径。


```

## # 注释

## 命名


## pointer

[深入理解Perl的变量 - Perl入门秘籍](https://perl-book.junmajinlong.com/ch2/2_variable_details.html)

Perl 变量完全使用引用的方式去存储数据.
Perl 允许「对象」原地修改数据。
因此 Perl 不存在「不可变对象」，所有对象（Heap 内存）都是「可变对象」.

Perl中的「变量」可以分为「标量类型」「数组类型」或「hash类型」
标量类型的变量在变量名前使用 $ 前缀
数组类型的变量在变量名前使用 @ 前缀
hash类型的变量在变量名前使用 % 前缀
$ @ % 正式叫法为 Sigil.
Sigil 表示根据变量所保存的内存地址去访问内存地址所执行的空间.
Sigil 表示根据 Stack 中名为 `name`（stack 地址为 `name`）的空间所保存的值`0xabc`（heap 地址），来访问 Heap 地址为 `0xabc` 的这段空间.



strict 模式下，变量必须要声明，可以先声明后赋值，也可以声明的同时赋值
变量可以重复声明，后声明的变量将掩盖(mask)已声明的变量，如果开启了warning，将给出变量掩盖的警告信息。

实际上，「变量」保存的是指向内存中数据的「引用」
重新声明或重新赋值变量只是改变了变量中保存的指针所指向的内存位置





## str

## int

## bool

## list




## 运算符


## for


## if


## function



## 二八

```perl
#!/usr/bin/perl



# 安装
scoop install -g perl-pdl

# 交互式控制台
perl -d -e 1
perl -de 0
windows 的 perl 只能在 cmd/powershell 中运行，不能在 git cygwin 等终端中运行


perl helloworld.pl [arg0 [arg1 [arg2 ...]]]
perl helloworld.plx [arg0 [arg1 [arg2 ...]]]






# 数据类型转换
Perl 中将字符串转换为数组使用 split() 函数，语法格式如下：
split [ PATTERN [ , EXPR [ , LIMIT ] ] ]

Perl 中将数组转换为字符串使用 join() 函数，语法格式如下：
join EXPR, LIST

# 定义字符串
$var_test = "runoob";
$var_string = "www-runoob-com";
$var_names = "google,taobao,runoob,weibo";

# 字符串转为数组
@test = split('', $var_test);
@string = split('-', $var_string);
@names  = split(',', $var_names);

# 截取 hash 为数组
%data = (-taobao => 45, -google => 30, -runoob => 40);
@array = @data{-taobao, -runoob};
print "Array : @array\n";
Array : 45 40


# %hash
@key_names = keys %hash;  #返回所有键名
$key00 = @Key_names[0];
@all_values = values %data;
$val00 = @all_values[0]
%hash{$key00} == val00
%hash{'key_name'}

%data = ('google'=>'google.com', 'runoob'=>'runoob.com'=>'taobao', 'taobao.com');
%data = ('google', 'google.com', 'runoob', 'runoob.com', 'taobao', 'taobao.com');
print "\$data{'google'} = $data{'google'}\n";
print "\$data{'runoob'} = $data{'runoob'}\n";
print "\$data{'taobao'} = $data{'taobao'}\n";
$data{'google'} = google.com
$data{'runoob'} = runoob.com
$data{'taobao'} = taobao.com

如果你在哈希中读取不存在的 key/value 对 ，会返回 undefined 值，且在执行时会有警告提醒。
为了避免这种情况，我们可以使用 exists 函数来判断key是否存在，存在的时候读取：

%data = ('google'=>'google.com', 'runoob'=>'runoob.com', 'taobao'=>'taobao.com');

if( exists($data{'facebook'} ) ){
   print "facebook 的网址为 $data{'facebook'} \n";
}
else
{
   print "facebook 键不存在\n";
}



# @array
@array = (1,2,3);
print "数组大小: ",scalar @array,"\n";
数组大小: 3
$var = @array[0];
print "var 的值为 = $var\n"
var 的值为 = 1


push @ARRAY, LIST
将列表的值放到数组的末尾

pop @ARRAY
删除数组的最后一个值

shift @ARRAY
弹出数组第一个值，并返回它。数组的索引值也依次减一。

unshift @ARRAY, LIST
将列表放在数组前面，并返回新数组的元素个数。

@sites = qw/google taobao runoob weibo qq facebook 网易/;
@sites2 = @sites[3,4,5];
@sites2 = @sites[3..5];
print "@sites2\n";
weibo qq facebook

@odd = (1,3,5);
@even = (2, 4, 6);
@numbers = (@odd, @even);
print "numbers = @numbers\n";
numbers = 1 3 5 2 4 6


```




## YukiHime for LANraragi



    操蛋，lrr 不支持 rclone mount 的文件夹，无论是 wsl 还是 docker



WSL
C:\Users\11\AppData\Roaming\LANraragi\Distro\rootfs\home\koyomi\lanraragi\log\redis.log
19:C 21 Dec 2021 16:56:40.506 # Can't chdir to '/mnt/e/comic/汉化单行本合集/2017/': I/O error
17:C 21 Dec 2021 17:00:40.067 # Can't chdir to '/mnt/e/comic/汉化单行本合集/2017/': I/O error




$ doco up lrr
Creating lrr ... error

ERROR: for lrr  Cannot create container for service lrr: The volume does not contain a recognized file system.

Please make sure that all required file system drivers are loaded and that the volume is not corrupted.

ERROR: for lrr  Cannot create container for service lrr: The volume does not contain a recognized file system.

Please make sure that all required file system drivers are loaded and that the volume is not corrupted.
ERROR: Encountered errors while bringing up the project.













1. 是否跳过符合规则的条目
5. 自定义跳过规则
2. 即停模式/连续模式
3. 追加模式/覆盖模式
4. regexp for full path, tag, category, title
5. 本地文件读取 json
6. http/https 读取 json


自定义规则

```json

```


多条规则以 json 格式书写，最终在插件设置界面以单行字符串的方式输入。

对了，追加模式可以通过读取全局变量里原有变量的值，再拼接实现。

一本漫画确实可以有多个 `category`。

跳过规则可以有多条，就像自定义规则一样。每条规则（rule）可以添加多种过滤器（filter）：regexp for full path, tag, category, title，但只有符合所有过滤器才算匹配上。也就是说，过滤器之间是「与逻辑」。如果想用「或逻辑」，可以写多个规则（rule），任何一个规则命中都会跳过。如果 `tag` 设置了一个标签，只要有这个标签就会跳过；如果 `tag` 设置了多个标签，这几个标签必须都有才会跳过；另外标签名必须完整，例如 `tag: "C"` 无法命中名为 `C89` 的标签，而必须使用 `tag: "C89"`。`category` 同理。`title` 类似 Notepad++ 搜索的普通模式，不需要完全一致。

难点：

0. 正确调用正则表达式。
1. 处理正则匹配的结果。
2. 字符串转 hash。
3. $lrr_info 里的所有可用变量。
4. 官方文档的 return 只列举了 tag、title，不知道 category 该怎么写（API 可用但太麻烦了）。
5. 赋值到底怎么赋，「=」「=>」「->」用哪个？
6. 能否通过返回空字符串来跳过？
7. 追加模式需要拼接字符串。
8. 自定义规则里的单引号双引号的转义问题。
9. 字符串里的特殊字符问题。
10. 将提取的字符串转换为正确的形式。
11. 数组与字符串的相互转换。


Debug

0. 将你写的 `.pm` 文件放进 `C:\Users\你的用户名\AppData\Roaming\LANraragi\Distro\rootfs\home\koyomi\lanraragi\lib\LANraragi\Plugin` 对应插件类型的文件夹里，重启 LANraragi 即可安装插件。
1. 打开某本漫画 - overview - edit metadata - Import Tags from Plugin
2. Batch Tagging



Installing a Plugin is as simple as dropping the .pm file in LANraragi's Plugin directory.
Restart the app, and your Plugin's name should appear on the initial listing.

You can also sideload Plugins through Plugin Configuration in the webapp.

$plugin->debug("This message will only show if LRR is in Debug Mode")
7
$plugin->info("You know me the fighting freak Knuckles and we're at Pumpkin Hill");
8
$plugin->warn("You ready?");
9
$plugin->error("Oh no");



开发代码段：

```perl
# category 核心代码
use LANraragi::Model::Category;
use LANraragi::Utils::Database qw(compute_id);


%subfolders = (
    "单行本"=>[],
    "单行本长篇"=>[],
)

for my $folder ( keys %subfolders ) {
    my $catID = LANraragi::Model::Category::create_category( $folder, "", 0, "" );    #获取分类 ID
    push @created_categories, $catID;

    for my $file ( @{ $subfolders{$folder} } ) {
        my $id = compute_id($file) || next;    #获取 archive ID
        LANraragi::Model::Category::add_to_category( $catID, $id );    # add archive to category
    }
}




my $file = @{$subfolders{'单行本长篇'}}[99];    #肯定是二者之一：路径（/path/to/comic.zip）或文件名(comic.zip)
# 基本可以肯定是路径了，
# 因为编辑元数据界面里的「Current File Name」值为「/home/koyomi/lanraragi/content/[Note]/短篇/[40010試作型] BLACK² TRAIN (COMlC 快楽天 2017年5月号)[無邪気漢化組][MJK-17-Z479].zip」

核心仿写：

my $catID = LANraragi::Model::Category::create_category( "单行本长篇", "", 0, "" );    #获取分类 ID，不存在则创建并取得分类 ID

my $file = q!/home/koyomi/lanraragi/content/[Note]/短篇/[40010試作型] BLACK² TRAIN (COMlC 快楽天 2017年5月号)[無邪気漢化組][MJK-17-Z479].zip!;

my $id = compute_id($file);    #获取 archive ID

LANraragi::Model::Category::add_to_category( $catID, $id );    # add archive to category





# Read values in the LRR Redis Database
my $redis = LANraragi::Model::Config->get_redis;
my $value = $redis->get("key");


```




## perl encoding

**encode_utf8 问题无解，门都没有。**

Perl从5.6开始已经开始在内部使用utf8编码来表示字符

Perl 本身以 Unicode 进行操作. 这表示 Perl 内部的字符串数据可用 Unicode 表示

在 Perl看来, 字符串只有两种形式. 一种是octets, 即8位序列, 也就是我们通常说的字节数组. 另一种utf8编码的字符串, perl管它叫string. 也就是说: Perl只熟悉两种编码: Ascii(octets)和utf8(string).

在perl内部, 字符串结构由两部分组成: 数据和utf8 flag. 比如字符串"中国"在perl内部的存储是这样:

|    key    | value |
| --------- | ----- |
| utf8 flag | on    |
| data      | 我    |

utf8 flag是On的话, perl就会当成string来处理
utf8 flag为Off, perl就会把他当成octets来处理

utf8 flag 默认为 off
`use utf8` 可以使 utf8 flag 默认为 on

```perl
use Encode;
use strict;
my $str = "中国";
Encode::_utf8_on($str);
print length($str) . "\n";
Encode::_utf8_off($str);
print length($str) . "\n";
运行结果是:
程序代码:
2
6


```
