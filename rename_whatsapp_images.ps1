# Rename WhatsApp Images to coinbase-1.jpg format
$folder = "d:\AXCIS\frontend\public\images\case-study\"

Write-Host "=" -NoNewline; Write-Host "=" * 50 -ForegroundColor Cyan
Write-Host "Coinbase Images Cleanup & Rename" -ForegroundColor Yellow
Write-Host "=" -NoNewline; Write-Host "=" * 50 -ForegroundColor Cyan
Write-Host ""

# Step 1: Delete all non-WhatsApp image files
Write-Host "Step 1: Removing old placeholder files..." -ForegroundColor White
$filesToDelete = Get-ChildItem -Path $folder -Include *.svg,*.txt,"coinbase-*.jpg" -File
foreach ($file in $filesToDelete) {
    Remove-Item $file.FullName -Force
    Write-Host "  Deleted: $($file.Name)" -ForegroundColor Gray
}
Write-Host "Done!" -ForegroundColor Green
Write-Host ""

# Step 2: Get all WhatsApp images and sort them
Write-Host "Step 2: Finding WhatsApp images..." -ForegroundColor White
$whatsappImages = Get-ChildItem -Path $folder -Filter "WhatsApp Image*.jpeg" | Sort-Object Name

Write-Host "Found $($whatsappImages.Count) WhatsApp images" -ForegroundColor Green
Write-Host ""

# Step 3: Rename them to coinbase-1.jpg, coinbase-2.jpg, etc.
Write-Host "Step 3: Renaming to coinbase-X.jpg format..." -ForegroundColor White
$counter = 1
foreach ($img in $whatsappImages) {
    $newName = "coinbase-$counter.jpg"
    $newPath = Join-Path $folder $newName
    
    Rename-Item -Path $img.FullName -NewName $newName -Force
    Write-Host "  Renamed: $($img.Name)" -ForegroundColor Gray
    Write-Host "       to: $newName" -ForegroundColor Green
    $counter++
}
Write-Host ""

# Step 4: Verify results
Write-Host "=" -NoNewline; Write-Host "=" * 50 -ForegroundColor Cyan
Write-Host "VERIFICATION - Final Files:" -ForegroundColor Yellow
Write-Host "=" -NoNewline; Write-Host "=" * 50 -ForegroundColor Cyan
Get-ChildItem -Path $folder -Filter "coinbase-*.jpg" | ForEach-Object {
    $sizeKB = [math]::Round($_.Length / 1KB, 2)
    Write-Host "  $($_.Name) - $sizeKB KB" -ForegroundColor Green
}
Write-Host ""
Write-Host "=" -NoNewline; Write-Host "=" * 50 -ForegroundColor Cyan
Write-Host "All done! Images ready for website." -ForegroundColor Green
Write-Host "Refresh your browser: http://localhost:5174/" -ForegroundColor Cyan
Write-Host "=" -NoNewline; Write-Host "=" * 50 -ForegroundColor Cyan
