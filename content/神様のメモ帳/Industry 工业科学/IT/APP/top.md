---
tags:
    - Label/Industry-工业科学/IT/APP/Command/CLI
    - flag/APP/Process
---

- 指标
    - `st` (steal time)
        - [[ChatGPT]]
        - “偷取时间”。它表示在 Hypervisor 虚拟化环境中，操作系统试图访问 CPU 时被 Hypervisor 拒绝的时间。这是因为在虚拟化环境中，多个虚拟机共享同一物理 CPU ，因此，在某些情况下，Hypervisor会为某个虚拟机分配 CPU 资源，但其他虚拟机有可能会在这段时间内试图访问 CPU ，被 Hypervisor 拒绝，这就成为了“偷取时间”。
        - 正常情况下，`st` 指标应该是较低的，通常应该小于 5% 。如果 `st` 值过高，可能会对运行中的服务产生负面影响，如降低吞吐量、延迟增加等。在这种情况下，你可以尝试优化虚拟机的配置，或在物理主机上增加 CPU 资源。

- Test
    - Akko (KVM 单核 768MB)
        - `st`
            - 零容器空载在 0-0.3
        - `id`
            - 零容器空载在 90-99
    - BuyVM (KVM 单核 512MB)
        - `st`
            - 零容器空载在 0-0.7
            - Docker 精简服务后空转 40-70，卡的要死，根本没法用，目测是邻居发力或超售了，之前不这样的
        - `id`
            - 零容器空载在 95-99
            - Docker 精简服务后空转 1-60，卡的要死，根本没法用，目测是邻居发力或超售了，之前不这样的


man top

默认它们是用 KiB 为单位展示的，但是按下 E（扩展内存缩放 extend memory scaling）可以轮换不同的单位：KiB、MiB、GiB、TiB、PiB、EiB（kilobytes、megabytes、gigabytes、terabytes、petabytes 和 exabytes）

t（toggle）来展开或折叠 Task 和 %Cpu(s) 行

h 调用帮助界面

    us：用户进程
    sy：系统进程
    ni：nice 用户进程
    id：CPU 的空闲时间，这个值比较高时说明系统比较空闲
    wa：等待时间，或者消耗在等待 I/O 完成的时间
    hi：消耗在硬件中断的时间
    si：消耗在软件中断的时间
    st：“虚拟机管理程序从该虚拟机窃取的时间”
    
    PID：进程 ID，一个用来定位进程的唯一标识符
    USER：运行进程的用户
    PR：任务的优先级
    NI：Nice 值，优先级的一个更好的表现形式
    VIRT：虚拟内存的大小，单位是 KiB（kibibytes）
    RES：常驻内存大小，单位是 KiB（物理内存和虚拟内存的一部分）
    SHR：共享内存大小，单位是 KiB（共享内存和虚拟内存的一部分）
    S：进程状态，一般 I 代表空闲，R 代表运行，S 代表休眠，Z 代表僵尸进程，T 或 t 代表停止（还有其它更少见的选项）
    %CPU：自从上次屏幕更新后的 CPU 使用率
    %MEM：自从上次屏幕更新后的 RES 常驻内存使用率
    TIME+：自从程序启动后总的 CPU 使用时间
    COMMAND：启动命令，如之前描述那样