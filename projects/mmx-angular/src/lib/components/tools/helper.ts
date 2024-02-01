export function array_chunk(arr: any, chunkSize: number) {
    var R = [];
    for (var i = 0; i < arr.length; i += chunkSize)
    R.push(arr.slice(i, i + chunkSize));
    return R;
  }