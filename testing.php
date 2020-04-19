<?php

$con=mysqli_connect("localhost","root","","restaurant_app");
// $sql = "SELECT * FROM services LIMIT 2";
$sql = "SELECT * FROM t_users LIMIT 2";
$result = mysqli_query($link, $sql);
$count = mysqli_num_rows($result)
if ($count > 0) {
	while($row = mysqli_fetch_array($result)) {
		echo "adasd";
	} 
	mysqli_free_result($result); //  free the memory
} else {
	echo "No found data";
}

mysqli_close($con);

