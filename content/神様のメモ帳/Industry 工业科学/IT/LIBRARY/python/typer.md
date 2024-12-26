---
tags:
  - flag/License/MIT
  - flag/LANGUAGE/Python
  - flag/Library/APILayer/Implement__/CLI/Parser
  - flag/Library/BusinessLogicLayer/Implement__/Exception
  - Label/Industry-工业科学/IT/Library/3rdLibrary
github: tiangolo/typer
pip: typer
pip-extra-deps:
  - all
---

## Brief

- Installation
    - `pip install typer[all]`

- Fundamentals
    - [[typer]] is based on [[Python click|click]]

- Pro
    - Define args by Function Signature
    - Define args by Type Annotation
    - Define Command by Decorator
    - `Option` & `Argument` instances can be reused
    - Pretty print for exeception by default

- Edition
    - `typing_extensions.Annotated` for all supported [[Python]]
        - Just an alias for 3.9+
    - `typing.Annotated` for [[Python]] 3.9+

## API

- Objects
    - `typer.Typer`
        - as if [[plumbum]]'s `plumbum.cli.Application`
        - Entry Point
            1. `.__call__()` to run typer instance
        - Callback
            - Typer without Subcommands
                - `typer.Typer(callback=func, invoke_without_command=True)`
                - `@callback(invoke_without_command=True) def func()`
            - Typer with Subcommand
                - `typer.Typer(callback=func)`
                - `@callback() def func()` to define options for typer itself
        - Subcommand
            1. `@command() def func()` to define subcommand without more nested sub-subcommands
            3. `.add_typer()` to add sub typer as if [[argparse]]/[[plumbum]], which is for implementing complex command like [[docker command]]
        - Name
            1. `typer.Typer(name='my-command')`
            2. `@callback(name='my-command')`
            3. `@callback() def my_command()`
            4. `@command('sub-command')`
            5. `@command() def sub_command()`
        - Group
            - `@command(rich_markup_mode='Group Name')`
        - Description
            1. docstring
            2. `Typer(help='...')`
    - `typer.Option`
        - Syntax
            - `opt: bool = typer.Option(False, '--opt', '-o')` (recommanded)
            - `opt: typing_extensions.Annotated[bool, typer.Option('--opt', '-o')] = False`
        - Name
            - `opt: Annotated[T, typer.Option('--opt', '-o')]`
            - e.g. `Annotated[List[str], Option()]`
        - Callback
            - `typer.Option(callback=func)`
        - Optional/Required
            - Required: `opt: Annotated[T, typer.Option()]`
            - CLI options are optional _by default_
        - Interactive
            - `opt: Annotated[T, typer.Option(prompt=True)]`
            - `opt: Annotated[T, typer.Option(prompt='description')]`
            - `opt: Annotated[T, typer.Option(hide_input=True)]`
        - Autocompletion
            - `opt: Annotated[T, typer.Option(autocompletion=func)]` with `func: Callable[[], List[str|Tuple[str, str]]]`
        - Description
            1. docstring
            2. `opt: Annotated[T, typer.Option(help=..., show_default=...)]`
        - Group
            - `opt: Annotated[T, typer.Option(rich_help_panel='Group Name')]`
        - Callback
            - `opt: Annotated[T, typer.Option(callback=func)]` with `func: Callable[T, T]`
            - `raise typer.BadParameter` in callback
    - `typer.Arguement` (Position Argument)
        - Syntax
            - `arg: bool = typer.Argument(False)` (recommanded)
            - `arg: typing_extensions.Annotated[bool, typer.Argument()] = False`
        - Callback
            - `typer.Argument(callback=func)`
        - Optional/Required
            - CLI arguments are required _by default_
            - Optional: `arg: Annotated[T, typer.Argument()] = ...`
            - Default value
                1. function argument with default value
                2. `arg: Annotated[T, typer.Argument(default_factory=get_name)]` with `get_name: Callable[[], T]`
        - Description
            1. docstring
            2. `arg: Annotated[T, typer.Argument(help=..., show_default=..., metavar=...)]`
        - Group
            - `arg: Annotated[T, typer.Argument(rich_help_panel='Group Name')]`
        - Env Var
            - `arg: Annotaged[typer.Argument(envvar=['ENV_01'])]`
    - Type of Option & Argument
        - Flag
            - `param: Annotated[bool, typer.Option()]`
            - `param: Annotated[bool, typer.Option('--yes/--no', '-y/-n')]`
        - Number
            - `typer.Option(min=0, max=100)`
            - `typer.Option(min=0)`
        - Path
            - `param: Annotated[Path, typer.Option()]`
            - `param: Annotated[Path, typer.Option(exists=..., file_okay=..., dir_okay=..., writable=..., readable=..., resolve_path=...)]`
        - Multiple time
            - `param: Annotated[List[T], typer.Option()]`
            - `param: List`
        - Counter
            - `typer.Option('--verbose', '-v', count=True)`
        - Enum
            - `param: MyEnum`
            - Con
                - 不支持 `IntEnum`
                - 只支持 `StrEnum` `Enum`
                - 只支持 `Enum` with `str` value
                - 其实是 [[Python click|click]] 不支持的锅
                - [[FEATURE] Use enum.name as parameter, and enum.value as value received by the function · Issue #151 · tiangolo/typer](https://github.com/tiangolo/typer/issues/151)
