LIST shard_type = bad, good
VAR first_shard = ()
VAR second_shard = ()
VAR third_shard = ()
VAR bad_shards = 0
VAR good_shards = 0

== shard_loop ==
Shards: {shards()}
+[Get Bad Shard]
    ~get_bad_shard()
    ->shard_loop
+[Get Good Shard]
    ~get_good_shard()
    ->shard_loop
    
=== test_get_shard ===
Shards: {shards()}
+[Get Bad Shard]
    ~get_bad_shard()
    ->->
+[Get Good Shard]
    ~get_good_shard()
    ->->
    
=== function get_good_shard() ===
~ achievement = pureShards
~ good_shards = good_shards + 1
{
- shards() == 1:
    ~first_shard = good
- shards() == 2:
    ~second_shard = good
- shards() == 3:
    ~third_shard = good
}

=== function get_bad_shard() ===
~ achievement = corruptedShards
~ bad_shards = bad_shards + 1
{
- shards() == 1:
    ~first_shard = bad
- shards() == 2:
    ~second_shard = bad
- shards() == 3:
    ~third_shard = bad
}