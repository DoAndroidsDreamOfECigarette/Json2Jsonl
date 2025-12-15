# jsontojsonl README
在训练大语言模型的时候，往往需要用到jsonl文件来作为数据集，而jsonl文件由于每个json需要压缩在同一行内，非常的不方便编写
这是一款用于便捷将含有多个多行json文件转换为每行一个json的jsonl格式文件的插件，可以使用正常的json语法编写完毕后再使用此插件将
文件格式化。该插件也可用于将jsonl文件展开以便于阅读。

When training large language models, you often need to use jsonl files as datasets, and jsonl files are very inconvenient to write because each JSON needs to be compressed on the same line.
This is a plugin for conveniently converting multi-line JSON files into jsonl format files with one JSON per line. You can use normal JSON syntax to write and then use this plugin to format the file. This plugin can also be used to expand jsonl files for easy reading.

## 使用说明
按下Alt+m快捷键或按下Shift+p在命令行输入Json To Jsonl即可激活，插件会自动格式化文件，将每个json整合到一行。也可按下Alt+n或输入Jsonl To Json将文件展开。

Press Alt+m or press Shift+p and enter "Json To Jsonl" in the command line to activate. The plugin will automatically format the file, integrating each JSON into one line. You can also press Alt+n or enter "Jsonl To Json" to expand the file.

### Github地址 https://github.com/DoAndroidsDreamOfECigarette/Json2Jsonl
**Enjoy!**
